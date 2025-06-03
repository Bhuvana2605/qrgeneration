package com.qr.qrbackend.util;

import java.security.*;
import java.util.Base64;
import javax.crypto.Cipher;

public class RsaUtil {

    private static final String RSA = "RSA";

    private final PrivateKey privateKey;
    private final PublicKey publicKey;

    // Constructor generates key pair on instantiation
    public RsaUtil() throws NoSuchAlgorithmException {
        KeyPairGenerator generator = KeyPairGenerator.getInstance(RSA);
        generator.initialize(2048);
        KeyPair pair = generator.generateKeyPair();
        this.privateKey = pair.getPrivate();
        this.publicKey = pair.getPublic();
    }

    public String encryptWithPrivateKey(String data) throws Exception {
        Cipher cipher = Cipher.getInstance(RSA);
        cipher.init(Cipher.ENCRYPT_MODE, privateKey);
        byte[] encryptedBytes = cipher.doFinal(data.getBytes());
        return Base64.getEncoder().encodeToString(encryptedBytes);
    }

    public String decryptWithPublicKey(String base64Encrypted) throws Exception {
        byte[] encryptedBytes = Base64.getDecoder().decode(base64Encrypted);
        Cipher cipher = Cipher.getInstance(RSA);
        cipher.init(Cipher.DECRYPT_MODE, publicKey);
        byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
        return new String(decryptedBytes);
    }

    public PrivateKey getPrivateKey() {
        return privateKey;
    }

    public PublicKey getPublicKey() {
        return publicKey;
    }
}
