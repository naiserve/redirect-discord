import { redirect } from 'next/navigation';

export default function InvitePage() {
  // Redirect ไปยัง URL ที่ต้องการ
  redirect('https://discord.com/api/oauth2/authorize?client_id=625143527055163412&permissions=8&scope=bot%20applications.commands');

  // คุณสามารถเพิ่ม fallback UI ได้ถ้าต้องการ
  return null;
}
