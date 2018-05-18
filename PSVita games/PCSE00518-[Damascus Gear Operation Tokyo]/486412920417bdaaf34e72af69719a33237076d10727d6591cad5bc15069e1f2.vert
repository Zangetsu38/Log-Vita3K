// Vertex shader.
#version 120

in vec4 aPosition;
in vec4 aVertexColor;
uniform mat4 uniViewProjection;
uniform mat4 uniWorld;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
