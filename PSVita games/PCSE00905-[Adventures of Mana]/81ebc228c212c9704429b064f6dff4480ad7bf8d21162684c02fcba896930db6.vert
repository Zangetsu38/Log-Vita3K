// Vertex shader.
#version 120

in vec4 position;
in vec4 texcoord0;
in vec4 color;
in vec4 weight;
in vec4 incidence;
uniform mat4 mVP;
uniform mat4 mLight;
uniform vec4 vUV;
uniform vec4 vJoint[240];

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
