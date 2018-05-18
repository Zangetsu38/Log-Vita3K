// Vertex shader.
#version 120

in vec4 position;
in vec4 color;
in vec4 texcoord;
uniform mat4 mat0;
uniform vec4 col0;
uniform vec4 uv_z;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
