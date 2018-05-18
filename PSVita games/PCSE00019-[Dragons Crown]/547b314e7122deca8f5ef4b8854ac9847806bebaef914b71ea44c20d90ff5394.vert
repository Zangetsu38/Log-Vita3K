// Vertex shader.
#version 120

in vec4 _aPosition1;
in vec4 _aColor1;
in vec4 _aUV1;
uniform mat4 _wvp;
uniform vec2 _TexScale;
uniform vec4 _aMatColor;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
