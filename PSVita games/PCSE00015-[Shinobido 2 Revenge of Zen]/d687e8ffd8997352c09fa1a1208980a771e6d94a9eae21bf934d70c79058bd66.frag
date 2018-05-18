// Fragment shader.
#version 120

uniform float mipmapLevel;
uniform sampler2D tex;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
