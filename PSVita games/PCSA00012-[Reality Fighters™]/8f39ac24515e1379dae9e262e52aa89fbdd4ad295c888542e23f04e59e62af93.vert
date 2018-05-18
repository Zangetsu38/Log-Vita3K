// Vertex shader.
#version 120

in vec4 position;
in vec4 Normal;
in vec4 tex0;
in vec4 BoneIndices;
in vec4 BoneWeights;
in vec4 Tangent;
uniform mat4 world_view_proj;
uniform vec4 Bones[36];

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
