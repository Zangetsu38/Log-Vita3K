// Fragment shader.
#version 120

uniform sampler2D scene;
uniform sampler2D particles;
uniform sampler2D addparticles;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
