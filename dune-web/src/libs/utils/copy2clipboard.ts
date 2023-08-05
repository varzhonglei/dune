import { addToast } from "../../components/alert"

export const copyToClipboard = async (textToCopy: string) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    addToast({
      text: '文本已复制到剪贴板',
      type: 'info'
    })
  } catch (error) {
    console.error('无法复制到剪贴板:', error);
  }
}