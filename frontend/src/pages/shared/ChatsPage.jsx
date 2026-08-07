import { useEffect, useState } from "react";
import { getChat, getChats, sendMessage } from "../../api/chat.api";
import { connectSocket, disconnectSocket } from "../../services/socket.service";

const ChatsPage = () => {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getChats().then(({ data }) => setChats(data.chats || [])).catch(() => setError("Could not load messages."));
    const socket = connectSocket();
    socket.on("receiveMessage", ({ chatId, message }) => {
      setActiveChat((current) => current?._id === chatId ? { ...current, messages: [...current.messages, message] } : current);
    });
    return () => { socket.off("receiveMessage"); disconnectSocket(); };
  }, []);

  const selectChat = async (chat) => {
    const { data } = await getChat(chat._id);
    setActiveChat(data.chat);
    connectSocket().emit("joinChat", chat._id);
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!text.trim() || !activeChat) return;
    try {
      const { data } = await sendMessage({ chatId: activeChat._id, text });
      setActiveChat(data.chat);
      connectSocket().emit("messageSent", { chatId: activeChat._id, message: data.newMessage });
      setText("");
    } catch { setError("Message could not be sent."); }
  };

  return <section className="page-shell py-10"><div className="mb-6"><p className="eyebrow">Conversations</p><h1 className="section-title mt-2">Messages</h1></div>{error && <p className="mb-4 text-sm text-rose-700">{error}</p>}<div className="surface grid min-h-[520px] md:grid-cols-[300px_1fr]"><aside className="border-b border-slate-200 p-4 md:border-b-0 md:border-r">{chats.length ? chats.map((chat) => <button key={chat._id} onClick={() => selectChat(chat)} className="mb-2 w-full rounded-xl p-3 text-left hover:bg-slate-50"><p className="font-bold">{chat.buyer?.name} · {chat.seller?.name}</p><p className="mt-1 truncate text-sm text-slate-500">{chat.property?.title || "Property discussion"}</p></button>) : <p className="text-sm text-slate-500">No conversations yet.</p>}</aside><div className="flex min-h-80 flex-col"><div className="border-b p-4 font-bold">{activeChat?.property?.title || "Choose a conversation"}</div><div className="flex-1 space-y-3 p-5">{activeChat?.messages?.map((message) => <div key={message._id} className="rounded-xl bg-slate-100 p-3 text-sm"><p>{message.text}</p></div>)}</div><form onSubmit={submit} className="flex gap-3 border-t p-4"><input value={text} onChange={(e) => setText(e.target.value)} disabled={!activeChat} placeholder="Write a message…" className="min-w-0 flex-1 rounded-xl border border-slate-200 p-3" /><button disabled={!activeChat} className="rounded-xl bg-emerald-600 px-5 font-bold text-white disabled:opacity-50">Send</button></form></div></div></section>;
};

export default ChatsPage;
