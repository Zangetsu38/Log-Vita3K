// Vertex shader.
#version 120

in vec4 aPosition;
in vec4 aColor;
uniform mat4 world_view_proj;
uniform mat4 camera_view_proj;
uniform mat4 world_matrix;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
