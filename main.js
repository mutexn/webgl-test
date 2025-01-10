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

  // canvasを初期化する色を設定する
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // canvasを初期化する
  gl.clear(gl.COLOR_BUFFER_BIT);
});
