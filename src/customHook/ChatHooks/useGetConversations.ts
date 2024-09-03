import { user1 } from "@/assets";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState(dummyConversations);

	// useEffect(() => {
	// 	const getConversations = async () => {
	// 		setLoading(true);
	// 		try {
	// 			const res = await fetch("/api/users");
	// 			const data = await res.json();
	// 			if (data.error) {
	// 				throw new Error(data.error);
	// 			}
	// 			setConversations(data);
	// 		} catch (error: any) {
	// 			toast.error(error?.message);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};

	// 	getConversations();
	// }, []);

	return { loading, conversations };
};
export default useGetConversations;


const dummyConversations = [
	{
		id: 1,
		avatar: user1,
		name: "Pankaj Kumar",
		lastMessage: "Hello",
		lastMessageTime: "10:00 AM",
		unreadMessages: 0,
		messages: []
	},
	{
		id: 2,
		avatar: "",
		name: "shiv Kumar",
		lastMessage: "hey",
		lastMessageTime: "09:00 AM",
		unreadMessages: 0,
	},
]