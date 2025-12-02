export default function isAlpha(str) {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if(code < 97 || code > 122) return false;
  }
  return true;
}