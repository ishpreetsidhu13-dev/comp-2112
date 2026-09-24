'use client';
import { ChangeEvent, useState } from 'react';
export default function Contact() {
   const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
   const [confirmation, setConfirmation] = useState("");



   const handleChange:(e:React.ChangeEvent<HTMLInputElement>) => void = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
   }
    const handleMessageChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    }
    const handleSubmit = () => {
      setConfirmation(`Your name: ${name} - Your message: ${message}`);
   }
    return (
        <main>
            <h1>Contact Us</h1>
            <input type="text" placeholder="Name" value={name} onChange={handleChange} />
            <input type="text" placeholder="message" value={message} onChange={handleMessageChange} />
            
            <button onClick={handleSubmit}>Submit</button>
            
            <p>{confirmation}</p>

        </main>
    );
}