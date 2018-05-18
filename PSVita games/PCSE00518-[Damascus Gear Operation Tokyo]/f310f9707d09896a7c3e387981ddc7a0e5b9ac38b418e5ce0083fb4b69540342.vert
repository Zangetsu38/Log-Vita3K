// Vertex shader.
#version 120

in vec4 aPosition;
in vec4 aVertexColor;
in vec4 aNormal;
in vec4 aTexCoord;
uniform mat4 uniViewProjection;
uniform mat4 uniShadowTexViewProj;
uniform vec3 uniLightDirection;
uniform vec3 uniEyePosition;
uniform mat4 uniWorld;
uniform mat4 uniWorldInverse;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
