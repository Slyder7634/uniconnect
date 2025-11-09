'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import {
  collection,
  query,
  orderBy,
  addDoc,
} from 'firebase/firestore';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { User as UserIcon, Send } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

type ChatMessage = {
  id: string;
  studentId: string;
  studentName: string;
  content: string;
  timestamp: any; // Firestore timestamp or Date
};

// Hardcoded user for chat functionality without full Firebase Auth
const TEMP_USER_ID = "student01";

const fakeMessages: ChatMessage[] = [
    { id: 'fake-1', studentId: 'student02', studentName: 'Jane Smith', content: 'Hey everyone! Did anyone understand the calculus homework?', timestamp: new Date(Date.now() - 1000 * 60 * 5) },
    { id: 'fake-2', studentId: 'student03', studentName: 'Sam Wilson', content: 'I\'m a bit stuck on question 3. The one about derivatives.', timestamp: new Date(Date.now() - 1000 * 60 * 4) },
    { id: 'fake-3', studentId: TEMP_USER_ID, studentName: 'Alex Doe', content: 'Oh yeah, question 3 was tricky. I can help! What part are you stuck on?', timestamp: new Date(Date.now() - 1000 * 60 * 2) },
];


export default function CommunityPage() {
  const firestore = useFirestore();

  const messagesRef = useMemoFirebase(
    () => (firestore ? collection(firestore, 'studentCommunityChat') : null),
    [firestore]
  );
  
  const messagesQuery = useMemoFirebase(
    () => (messagesRef ? query(messagesRef, orderBy('timestamp', 'asc')) : null),
    [messagesRef]
  );

  const { data: messages, isLoading: isMessagesLoading } = useCollection<ChatMessage>(messagesQuery);

  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const displayMessages = (messages && messages.length > 0) ? messages : fakeMessages;

  useEffect(() => {
    if (scrollAreaRef.current) {
      setTimeout(() => {
        const inner = scrollAreaRef.current?.querySelector('div');
        if (inner) {
          inner.scrollTop = inner.scrollHeight;
        }
      }, 100);
    }
  }, [displayMessages]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !messagesRef) return;

    setIsSending(true);
    const messageData = {
      studentId: TEMP_USER_ID,
      studentName: "Alex Doe", // Hardcode name directly here
      content: input,
      timestamp: new Date(),
    };

    setInput('');

    addDoc(messagesRef, messageData)
      .catch((error) => {
        const contextualError = new FirestorePermissionError({
          operation: 'create',
          path: messagesRef.path,
          requestResourceData: messageData,
        });
        errorEmitter.emit('permission-error', contextualError);
      })
      .finally(() => {
        setIsSending(false);
      });
  };
  
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Student Community</h1>
        <p className="text-muted-foreground">
          Connect with your peers and discuss all things university.
        </p>
      </div>

      <Card className="flex flex-col flex-1">
        <CardHeader>
          <CardTitle>Community Chat</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden flex flex-col">
          <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {isMessagesLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-12 w-3/4" />
                  <Skeleton className="h-12 w-1/2 ml-auto" />
                  <Skeleton className="h-12 w-2/3" />
                </div>
              ) : (
                displayMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 ${
                      message.studentId === TEMP_USER_ID ? 'justify-end' : ''
                    }`}
                  >
                    {message.studentId !== TEMP_USER_ID && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{getInitials(message.studentName)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-xs rounded-lg p-3 text-sm md:max-w-md ${
                        message.studentId === TEMP_USER_ID
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary'
                      }`}
                    >
                      {message.studentId !== TEMP_USER_ID && (
                        <p className="font-bold mb-1">{message.studentName}</p>
                      )}
                      <p>{message.content}</p>
                    </div>
                    {message.studentId === TEMP_USER_ID && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          <UserIcon className="h-5 w-5" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))
              )}
              {displayMessages.length === 0 && !isMessagesLoading && (
                  <div className="text-center text-muted-foreground py-8">
                      <p>No messages yet. Be the first to start a conversation!</p>
                  </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="pt-6">
          <form onSubmit={handleSendMessage} className="relative w-full">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="pr-12"
              disabled={isSending}
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2"
              disabled={isSending || !input.trim()}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
