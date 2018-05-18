// Vertex shader.
#version 120

in vec4 position;
in vec4 texcoord;
in vec4 color;
uniform ?mat4 worldMtx;
uniform ?mat4 modelMtx;
uniform ?mat4 viewMtx;
uniform ?vec4 texFilter2V;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
