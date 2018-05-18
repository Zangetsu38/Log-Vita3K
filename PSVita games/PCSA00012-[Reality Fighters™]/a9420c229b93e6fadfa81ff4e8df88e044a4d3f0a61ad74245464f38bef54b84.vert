// Vertex shader.
#version 120

in vec4 aPosition;
in vec4 aColor;
in vec4 texCoord;
uniform mat4 world_view_proj;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
