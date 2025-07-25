import { api } from "./api-client";
import { MessageItem } from "./fetch-channel-messages";

type Request = {
  slug: string
  message: string
}

export async function createChannelMessage({ slug, message }: Request) {
  return api.post<MessageItem>(`/chat-system/channels/${slug}/messages`, {
    conteudo: message
  })
}