// Vertex shader.
#version 120

in vec4 aPosition;
in vec4 aColor;
uniform mat4 world_view_proj;
uniform mat4 light_matrix;
uniform vec2 invert_shadow_size;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
