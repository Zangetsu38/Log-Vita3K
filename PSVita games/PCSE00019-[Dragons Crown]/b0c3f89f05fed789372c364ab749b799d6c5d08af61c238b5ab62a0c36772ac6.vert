// Vertex shader.
#version 120

in vec4 _aPosition;
in vec4 _aColor;
in vec4 _aUV;
uniform mat4 _wvp;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
