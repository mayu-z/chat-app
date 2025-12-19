
import { useChatStore } from "../store/useChatStore.js";
import { useEffect } from "react";

const ChatContainer = () => {
  const { isMessagesLoading, getMessages, selectedUser } = useChatStore();
  useEffect(() => {
    getMessages(selectedUser._id)
  }, [selectedUser._id, getMessages]);
  if (isMessagesLoading) return <div>Loading...</div>

  return <div>chat container</div>;
};
export default ChatContainer;