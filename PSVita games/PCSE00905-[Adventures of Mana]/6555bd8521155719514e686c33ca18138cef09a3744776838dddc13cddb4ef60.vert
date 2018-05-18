// Vertex shader.
#version 120

in vec4 position;
in vec4 texcoord0;
in vec4 color;
uniform mat4 mVP;
uniform mat4 mLight;
uniform vec4 vUV;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
