// Vertex shader.
#version 120

in vec4 _aPosition0;
in vec4 _aColor0;
in vec4 _aPosition1;
in vec4 _aColor1;
in vec4 _aUV1;
in vec4 _aPosition2;
in vec4 _aColor2;
in vec4 _aPosition3;
in vec4 _aColor3;
uniform mat4 _wvp;
uniform vec2 _TexScale;
uniform vec4 _aMatColor;
uniform vec4 _K;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
