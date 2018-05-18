// Vertex shader.
#version 120

in vec4 position;
in vec4 color;
in vec4 texcoord0;
uniform mat4 mVP;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
