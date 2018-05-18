// Vertex shader.
#version 120

in vec4 aPosition;
in vec4 aVertexColor;
in vec4 aTexCoord;
uniform mat4 uniViewProjection;
uniform vec4 uniShadowLightPosition;
uniform mat4 uniWorld;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
