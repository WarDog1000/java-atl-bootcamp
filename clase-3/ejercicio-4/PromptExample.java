import java.util.Scanner;

public class PromptExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Ingresa tu nombre: ");
        String nombre = scanner.nextLine();
        
        System.out.print("Ingresa tu edad: ");
        int edad = scanner.nextInt();
        
        System.out.println("Hola, " + nombre + "! Tienes " + edad + " años.");
        
        scanner.close();
    }
}