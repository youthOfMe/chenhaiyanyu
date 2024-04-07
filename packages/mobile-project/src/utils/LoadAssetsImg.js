export const getAssetURL = (image) => {
  // 参数一: 是一个相对路径
  return new URL(`../assets/img/${image}`, import.meta.url).href
}
