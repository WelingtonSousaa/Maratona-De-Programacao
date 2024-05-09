import mysql.connector
import requests

# URL da imagem - pelo método usado deve ser um link
url_imagem = ""

# Baixar a imagem  
resposta = requests.get(url_imagem)
if resposta.status_code == 200:
    imagem_binaria = resposta.content

    # Conectar ao banco de dados
    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="root",
            password="",
            database="imagens"
        )
        
        cursor = conn.cursor()

        # Inserir a imagem na tabela
        cursor.execute("INSERT INTO imagens (imagem) VALUES (%s)", (imagem_binaria,))
        conn.commit()
        
        print("Imagem inserida com sucesso no banco de dados!")

    except mysql.connector.Error as e:
        print(f"Erro ao conectar ao banco de dados: {e}")

    finally:
        # Fechar a conexão e o cursor
        cursor.close()
        conn.close()

else:
    print("Erro ao baixar a imagem da URL.")
