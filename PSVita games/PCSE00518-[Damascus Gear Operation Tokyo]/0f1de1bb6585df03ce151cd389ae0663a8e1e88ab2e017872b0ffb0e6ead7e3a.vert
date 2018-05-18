// Vertex shader.
#version 120

in vec4 aPosition;
in vec4 aVertexColor;
in vec4 aNormal;
in vec4 aTexCoord;
in vec4 aBlendIndices;
in vec4 aBlendWeights;
uniform mat4 uniViewProjection;
uniform vec3 uniEyePosition;
uniform vec3 uniLightDirection;
uniform mat4 uniWorld;
uniform mat4 uniWorldInverse;
uniform vec3 uniLightPosition1;
uniform vec4 uniLightAttenuation1;
uniform vec4 arrBoneMatrix[256];

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
