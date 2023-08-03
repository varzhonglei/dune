export const copyToClipboard = async (textToCopy: string) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    console.log('文本已复制到剪贴板');
  } catch (error) {
    console.error('无法复制到剪贴板:', error);
  }
}