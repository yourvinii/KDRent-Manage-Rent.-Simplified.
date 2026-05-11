import { Router } from "express";
import Chat from "../models/chat.model.js";
import { protect } from "../middlewares/auth.middleware.js";
const chatRouter = Router();

chatRouter.use(protect);

// to create a chat
chatRouter.route("/start").post(async (req, res) => {
  try {
    const { propertyId, sellerId, buyerId: providedBuyerId } = req.body;
    let buyerId, finalSellerId;
    if (req.user.role === "seller") {
      buyerId = providedBuyerId;
      finalSellerId = req.user._id;
    } else {
      buyerId = req.user._id;
      finalSellerId = sellerId;
    }

    if (!buyerId || !finalSellerId) {
      return res.status(400).json({
        message: "Missing buyer or seller Id",
      });
    }

    // check for an exisiting chat btw this buyer and seller
    let chat = await Chat.findOne({
      buyer: buyerId,
      seller: finalSellerId,
    });

    if (!chat) {
      chat = await Chat.create({
        property: propertyId, // initial property context
        buyer: buyerId,
        seller: finalSellerId,
        messages: [],
      });
    }

    chat = await Chat.findById(chat._id)
      .populate("buyer", "name email profilePic")
      .populate("seller", "name email profilePic")
      .populate("property", "title price images");

    res.json(chat);
  } catch (error) {
    return res.status(500).json({
      message: "Error creating chat or getting previous one",
      error: error.message,
    });
  }
});

// to send message
chatRouter.route("/send").post(async (req, res) => {
  try {
    const { chatId, text, image } = req.body;
    const userId = req.user._id;

    const chat = await Chat.findById(chatId);
    if (!chat)
      return res.status(404).json({
        message: "Chat not found",
      });

    // ensure sender is part of this chat
    if (chat.buyer.toString() !== userId && chat.seller.toString() !== userId) {
      return res.status(403).json({
        message: "Not authorized to send message in this chat",
      });
    }
    const newMessage = {
      sender: userId,
      text,
      image,
      createdAt: new Date(),
    };
    chat.messages.push(newMessage);

    await chat.save();

    const savedMessage = chat.messages[chat.messages.length - 1];
    res.json({
      chat,
      newMessage: savedMessage,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error sending",
      error: error.message,
    });
  }
});


// to get chats for user(all)
chatRouter.route("/user").get(async (req, res) => {
  try {
    const userId = req.user._id;
    const chats = await Chat.find({
      $or: [{ buyer: userId }, { seller: userId }],
    })
      .populate("buyer", "name email profilePic")
      .populate("seller", "name email profilePic")
      .populate("property", "title price images")
      .sort({ updatedAt: -1 });

    return res.json({
      chats,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching user chats",
      error: error.message,
    });
  }
});

// to get specific conversation(chat)
chatRouter.route("/:chatId").get(async (req, res) => {
  {
    try {
      const chat = await Chat.findById(req.params.chatId).populate(
        "messages.sender",
        "name profilePic",
      );

      if (!chat) return res.status(404).json({ message: "Chat not found" });

      const userId = req.user._id.toString();
      if (
        chat.buyer.toString() !== userId &&
        chat.seller.toString() !== userId
      ) {
        return res.status(403).json({
          message: "You are not authorized",
        });
      }

      return res.json({ chat });
    } catch (error) {
      return res.status(500).json({
        message: "Error fetching chats(messages)",
        error: error.message,
      });
    }
  }
});

// to delete an entire chat
chatRouter.route("/:chatId").delete(async (req, res) => {
  try {
    const userId = req.user._id;
    const chat = await Chat.findById(req.params.chatId);

    if (!chat) return res.status(404)._construct({ message: "Chat not found" });

    // now we ensure the user is part of the chat
    if (
      chat.buyer.toString() !== userId.toString() &&
      chat.seller.toString() !== userId.toString()
    ) {
      return res.status(403).json({ message: "Not Authorized" });
    }
    await Chat.findByIdAndDelete(req.params.chatId);
    return res.json({ message: "Chat deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting chat",
      error: error.message,
    });
  }
});

// to delete a specific message
chatRouter.route("/:chatId/message/:messageId").delete(async (req, res) => {
  try {
    const userId = req.user._id;
    const chat = await Chat.findById(req.params.chatId);

    if (!chat) return res.status(404)._construct({ message: "Chat not found" });

    const message = chat.messages.id(req.params.messageId);
    if (!message) return res.status(404).json({ message: "Message not found" });

    // only sender can delete their's message
    if (message.sender.toString() !== userId.toString()) {
      return res.status(403).json({
        message: "Not Authorized to delete this message",
      });
    }

    chat.messages.pull(req.params.messageId);
    await chat.save();
    return res.json({ message: "Message deleted successfully!", chat });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

export default chatRouter;
