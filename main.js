document.addEventListener("DOMcontentLoaded", function () {
  // HTMLからcanvas要素を取得する
  const canvas = document.getElementById("canvas");

  // canvas要素からwebglコンテキストを取得する
  const gl = canvas.getContext("webgl");

  // WebGLコンテキストが取得できたかどうか調べる
  if (!gl) {
    alert("webgl not supported!");
    return;
  }
});
