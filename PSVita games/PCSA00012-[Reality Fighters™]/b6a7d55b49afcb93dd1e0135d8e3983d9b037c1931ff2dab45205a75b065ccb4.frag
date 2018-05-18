// Fragment shader.
#version 120

uniform ?vec3 light_dir;
uniform sampler2D diffuse;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
