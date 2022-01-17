<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/jeux")
 */
class JeuxController extends AbstractController
{
    /**
     * @Route("/pendu", name="pendu")
     */
    public function pendu(): Response
    {
        return $this->render('jeux/pendu.html.twig', [
            'controller_name' => 'JeuxController',
        ]);
    }
}
