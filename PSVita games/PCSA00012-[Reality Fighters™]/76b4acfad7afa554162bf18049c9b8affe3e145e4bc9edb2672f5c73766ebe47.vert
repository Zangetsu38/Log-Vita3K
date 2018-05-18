// Vertex shader.
#version 120

in vec4 position;
in vec4 Normal;
in vec4 tex0;
in vec4 BoneIndices;
in vec4 BoneWeights;
in vec4 Tangent;
uniform mat4 world_view_proj;
uniform vec4 front_axis_u;
uniform vec4 front_axis_v;
uniform vec4 side_axis_u;
uniform vec4 side_axis_v;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
