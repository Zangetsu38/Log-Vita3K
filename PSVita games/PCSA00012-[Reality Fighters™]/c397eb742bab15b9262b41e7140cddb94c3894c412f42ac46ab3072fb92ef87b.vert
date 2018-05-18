// Vertex shader.
#version 120

in vec4 aPosition;
in vec4 aColor;
in vec4 texCoord;
uniform mat4 world_view_proj;
uniform ?vec4 i_clip0;
uniform ?vec4 i_clip1;
uniform ?vec4 i_clip2;
uniform ?vec4 i_clip3;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
