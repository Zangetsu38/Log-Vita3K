// Fragment shader.
#version 120

uniform float fresnel;
uniform float min_tex_coord;
uniform float max_tex_coord;
uniform sampler2D diffuse;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
