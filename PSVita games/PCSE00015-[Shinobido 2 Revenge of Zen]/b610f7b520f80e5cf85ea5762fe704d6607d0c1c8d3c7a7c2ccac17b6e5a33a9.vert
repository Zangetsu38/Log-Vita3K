// Vertex shader.
#version 120

in struct {
   vec4 position;
} IN;
uniform mat4 tx;
uniform float ps;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
