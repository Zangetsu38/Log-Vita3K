// Vertex shader.
#version 120

in vec4 position;
in vec4 Normal;
in vec4 tex0;
in vec4 BoneIndices;
in vec4 BoneWeights;
in vec4 Tangent;
uniform mat4 world_view_proj;
uniform vec4 Bones[60];
uniform ?vec4 i_clip0;
uniform ?vec4 i_clip1;
uniform float fat_scale;
uniform vec3 sil_color;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
