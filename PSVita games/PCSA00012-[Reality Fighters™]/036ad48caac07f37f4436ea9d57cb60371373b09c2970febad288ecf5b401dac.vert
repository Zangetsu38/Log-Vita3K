// Vertex shader.
#version 120

in vec4 position;
in vec4 tex0;
in vec4 tex1;
in vec4 tex2;
uniform mat4 world_view_proj;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
