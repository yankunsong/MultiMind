import React, { useState, useEffect } from "react";
import { Input, Button, Select, List, Avatar, Typography } from "antd";
import { SendOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;
const { Title, Text } = Typography;  // Add Text to the destructuring

const dummyResponses = [
  "That's an interesting perspective. Have you considered...",
  "I agree with your point. Additionally, we should think about...",
  "I'm not sure I agree. My concern is...",
  "That's a valid point. However, we also need to consider...",
];

function ChatroomContainer({ personas }) {
  const [selectedPersonas, setSelectedPersonas] = useState([]);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [flattenedPersonas, setFlattenedPersonas] = useState([]);

  useEffect(() => {
    if (personas) {
      const flattened = Object.values(personas).flat();
      setFlattenedPersonas(flattened);
    }
  }, [personas]);

  const handlePersonaChange = (value) => {
    setSelectedPersonas(value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents default behavior (new line)
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.trim() && selectedPersonas.length > 0) {
      const newUserMessage = { sender: "You", content: message, isUser: true };
      setChatHistory([...chatHistory, newUserMessage]);

      // Generate responses from selected personas
      selectedPersonas.forEach((personaId) => {
        const persona = flattenedPersonas.find((p) => p.id === personaId);
        if (persona) {
          const dummyResponse = {
            sender: persona.name,
            content:
              dummyResponses[Math.floor(Math.random() * dummyResponses.length)],
            isUser: false,
            color: persona.color || '#1890ff', // Use a default color if not provided
          };
          setTimeout(() => {
            setChatHistory((prev) => [...prev, dummyResponse]);
          }, Math.random() * 1000 + 500); // Random delay between 500-1500ms
        }
      });

      setMessage("");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Title level={4}>Chatroom</Title>
      <Select
        mode="multiple"
        style={{ width: "100%", marginBottom: "1rem" }}
        placeholder="Select personas to chat with"
        onChange={handlePersonaChange}
        value={selectedPersonas}
      >
        {flattenedPersonas.map((persona) => (
          <Option key={persona.id} value={persona.id}>
            {persona.name}
          </Option>
        ))}
      </Select>
      <List
        itemLayout="horizontal"
        dataSource={chatHistory}
        renderItem={(item) => (
          <List.Item style={{ 
            justifyContent: item.isUser ? 'flex-end' : 'flex-start',
            border: 'none', // Remove the border between items
            padding: '4px 0' // Reduce padding between items
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: item.isUser ? 'row-reverse' : 'row',
              alignItems: 'flex-start',
              maxWidth: '70%'
            }}>
              <Avatar style={{ 
                backgroundColor: item.isUser ? '#1890ff' : item.color, 
                marginRight: item.isUser ? 0 : 8, 
                marginLeft: item.isUser ? 8 : 0 
              }}>
                {item.sender[0]}
              </Avatar>
              <div style={{
                background: item.isUser ? '#e6f7ff' : '#f0f0f0',
                padding: '8px 12px',
                borderRadius: '12px',
                [item.isUser ? 'borderTopRightRadius' : 'borderTopLeftRadius']: '0',
              }}>
                <Text strong>{item.sender}: </Text>
                <Text>{item.content}</Text>
              </div>
            </div>
          </List.Item>
        )}
        style={{ 
          flexGrow: 1, 
          overflowY: "auto", 
          marginBottom: "1rem",
          border: 'none' // Remove the border around the List
        }}
      />
      <div style={{ display: "flex" }}>
        <TextArea
          value={message}
          onChange={handleMessageChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here (Press Enter to send)"
          autoSize={{ minRows: 2, maxRows: 6 }}
          style={{ flexGrow: 1, marginRight: "1rem" }}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default ChatroomContainer;
