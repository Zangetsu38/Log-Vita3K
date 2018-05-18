// Vertex shader.
#version 120

in vec4 aPosition;
in vec4 aTexcoord;
uniform mat4 uModelviewProjection;
uniform mat4 uBlurFilter;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
