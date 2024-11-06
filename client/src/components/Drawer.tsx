import { Button, Drawer } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
type Props = {
  onClose: () => void;
  open: boolean;
};

const DrawerContent = ({ onClose, open }: Props) => {
  const [message, setMessage] = useState("");

  const sendMessageHandler = () => {
    console.log(message);
    setMessage("");
  };
  return (
    <div className="w-full">
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <TextArea
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={sendMessageHandler}>Send</Button>
      </Drawer>
    </div>
  );
};

export default DrawerContent;
