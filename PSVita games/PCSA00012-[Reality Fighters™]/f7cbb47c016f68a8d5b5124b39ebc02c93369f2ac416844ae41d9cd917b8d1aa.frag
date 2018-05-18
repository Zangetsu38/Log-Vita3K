// Fragment shader.
#version 120

uniform ?vec2 amount_alpha;
uniform ?vec3 camera_front;
uniform sampler2D diffuse;
uniform sampler2D glassNormal;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
