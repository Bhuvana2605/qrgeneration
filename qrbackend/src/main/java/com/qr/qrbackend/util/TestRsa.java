package com.qr.qrbackend.util;
public class TestRsa {
    public static void main(String[] args) throws Exception {
        RsaUtil rsaUtil = new RsaUtil();

        String originalData = "Hello Employee Data!";
        String encrypted = rsaUtil.encryptWithPrivateKey(originalData);
        System.out.println("Encrypted: " + encrypted);

        String decrypted = rsaUtil.decryptWithPublicKey(encrypted);
        System.out.println("Decrypted: " + decrypted);
    }
}

