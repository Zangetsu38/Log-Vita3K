// Vertex shader.
#version 120

in struct {
   vec4 position;
   vec4 st;
} IN;

void main() {
    gl_Position = vec4(0, 0, 0, 1);
}
