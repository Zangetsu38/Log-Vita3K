// Fragment shader.
#version 120

uniform vec4 scale_values;
uniform sampler2D sceneSampler;
uniform sampler2D random2D;
uniform sampler2D mask;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
