// Vertex shader.
#version 120

in vec4 position0;
in vec4 tex0;
in vec4 position1;
in vec4 tex1;
uniform mat4 world_view_proj;
uniform mat4 world_matrix;
uniform float amount;
uniform vec4 color;
uniform vec2 offset_tex;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
