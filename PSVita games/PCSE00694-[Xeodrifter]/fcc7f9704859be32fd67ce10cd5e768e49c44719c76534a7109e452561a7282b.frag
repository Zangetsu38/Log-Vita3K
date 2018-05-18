// Fragment shader.
#version 120

uniform uint uBlurBlend_B_Invert;
uniform float uBlurBlend_F;
uniform sampler2D uSampler0;
uniform sampler2D uSampler1;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
