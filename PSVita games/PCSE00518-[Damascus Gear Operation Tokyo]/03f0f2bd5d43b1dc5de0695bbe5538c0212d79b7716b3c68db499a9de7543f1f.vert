// Vertex shader.
#version 120

in vec4 aPosition;
in vec4 aVertexColor;
in vec4 aNormal;
in vec4 aTexCoord;
in vec4 aBlendIndices;
in vec4 aBlendWeights;
uniform mat4 uniViewProjection;
uniform vec4 uniShadowLightPosition;
uniform mat4 uniWorld;
uniform vec4 arrBoneMatrix[256];

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
